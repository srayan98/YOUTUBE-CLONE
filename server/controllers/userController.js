import User from '../models/User.js';

// Get user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found.' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user.' });
  }
};

// Update user info
export const updateUser = async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.status(403).json({ error: 'You can update only your own account.' });

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user.' });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  if (req.user.id !== req.params.id)
    return res.status(403).json({ error: 'You can delete only your own account.' });

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
};
