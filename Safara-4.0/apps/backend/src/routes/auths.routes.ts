import { Router } from 'express';
import { 
  register, 
  signin, 
  getProfile, 
  getAllPendingRequests,
  approveUser,
  rejectUser,
  getAllUsers,
  getUserStats,
  updateProfile,
  deleteUser
} from '../controllers/auth.controller.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';
import { registerValidation, loginValidation } from '../middlewares/validation.js';

const router = Router();

// Public routes
router.post('/register', registerValidation, register);
router.post('/signin', loginValidation, signin);

// Protected routes (require authentication)
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);

// Admin routes
router.get('/pending-requests', authenticate, authorize('admin', 'supervisor'), getAllPendingRequests);
router.post('/approve/:userId', authenticate, authorize('admin'), approveUser);
router.post('/reject/:userId', authenticate, authorize('admin'), rejectUser);
router.get('/users', authenticate, authorize('admin', 'supervisor'), getAllUsers);
router.get('/stats', authenticate, authorize('admin'), getUserStats);
router.delete('/users/:userId', authenticate, authorize('admin'), deleteUser);

export default router;