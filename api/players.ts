import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews";
import { playerDetails } from "../data/PlayerDetails";
export default (req: VercelRequest, res: VercelResponse) => {
    const id = req.query.playerId;
    const player = playerDetails.find(player => player.playerId === Number(id));
    player ? res.status(200).json({ playerDetails: player }) : res.status(200).json({ players: playerOverviews });
};