import { useState } from "react";
import { postContact } from "../services/contact.service";

export const usePostContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await postContact();
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    submitForm,
  };
};

export default usePostContact;
