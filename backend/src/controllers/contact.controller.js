import ContactModel from "../../models/Contact.model.js";

export const postContact = async (req, res) => {
  try {
    const contact = new ContactModel(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
