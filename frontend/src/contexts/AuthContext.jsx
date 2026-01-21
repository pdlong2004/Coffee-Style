import { createContext, useContext, useState, useEffect } from 'react';
import { login as loginApi, register as registerApi, getMe as getMeApi } from '../services/auth.service';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Kiểm tra token và lấy thông tin user khi app khởi động
    useEffect(() => {
        const initAuth = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                try {
                    const response = await getMeApi();
                    if (response.data.success) {
                        setUser(response.data.data);
                    } else {
                        localStorage.removeItem('token');
                        setToken(null);
                    }
                } catch (error) {
                    console.error('Auth init error:', error);
                    localStorage.removeItem('token');
                    setToken(null);
                }
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await loginApi({ email, password });
            if (response.data.success) {
                const { token: newToken, user: userData } = response.data.data;
                localStorage.setItem('token', newToken);
                setToken(newToken);
                setUser(userData);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Đăng nhập thất bại',
            };
        }
    };

    const register = async (userData) => {
        try {
            const response = await registerApi(userData);
            if (response.data.success) {
                const { token: newToken, user: userData } = response.data.data;
                localStorage.setItem('token', newToken);
                setToken(newToken);
                setUser(userData);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Đăng ký thất bại',
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!token && !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

