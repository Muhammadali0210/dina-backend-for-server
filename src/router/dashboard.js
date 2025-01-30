import { Group } from "../mongoose/schemas/group.js";
import { User } from "../mongoose/schemas/user.js";
import { Result } from "../mongoose/schemas/result.js";
import { Router } from "express";

const router = Router();

router.get('/statistics', async (req, res) => {
    try {
        const teachers = await User.countDocuments({ role: 'teacher' });
        const results = await Result.countDocuments();
        const groups = await Group.countDocuments();
        res.send({
            teachers,
            results,
            groups
        });
    } catch (error) {
        res.send(error);
    }
})

export default router; 