import { VercelRequest, VercelResponse } from "@vercel/node";
import { pitches } from '../data/Pitches'

export default (req: VercelRequest, res: VercelResponse) => {
    const id = req.query.playerId;
    const pitchDetails = pitches.filter(pitch => pitch.pitcherId === Number(id));
    res.status(200).json({ pitches: pitchDetails })
};