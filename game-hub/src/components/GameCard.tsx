import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGame.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedUrl from "../services/img-service.ts";

interface Props {
    game: Game,
}

const GameCard = ({game}: Props) => {
    return(
    <Card>
        <Image src={getCroppedUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
    );
}

export default GameCard;