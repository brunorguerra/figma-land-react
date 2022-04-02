import { Button } from "../../../../components/button";
import { Description } from "../../../../components/description";
import { Title } from "../../../../components/title";
import { Container } from "./style";

export const Gallery = () => {
    return (
        <Container>
            <Title>Gallery</Title>
            <Description>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
            </Description>

            <div className="grid1-images">
                <div className="card-img card1">
                    <img
                        src="./img-drone.png"
                        alt="imagem de um drone parado no chão"
                    />
                </div>
                <div className="card-img card2">
                    <img
                        src="./img-tablet.png"
                        alt="tablet apoiado no chão ao lado de uma piscina"
                    />
                </div>
                <div className="card-img card3">
                    <img
                        src="./img-reuniao.png"
                        alt="2 mulheres sentadas uma de frente a outra utilizando dispositivos móveis"
                    />
                </div>
                <div className="card-img card4">
                    <img
                        src="./img-applePC.png"
                        alt="uma mesa com um computador da Apple"
                    />
                </div>
            </div>

            <div className="grid2-images">
                <div className="card-img big card5">
                    <img
                        src="./img-codigos.png"
                        alt="tela de um monitor com linhas de código de algoritmos"
                    />
                </div>
                <div className="card-img small card6">
                    <img
                        src="./img-notebook.png"
                        alt="imagem de um notebook de teclado azul com uma pessoa escrevendo nele"
                    />
                </div>
                <div className="card-img big card7">
                    <img
                        src="./img-camera.png"
                        alt="imagem de uma camera preta em cima de um travesseiro azul"
                    />
                </div>
            </div>

            <Button typeStyle="outlined">See more</Button>
        </Container>
    );
};
