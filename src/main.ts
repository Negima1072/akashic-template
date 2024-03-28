export default function main(param: g.GameMainParameterObject): void {
    const scene = new g.Scene({
        game: g.game,
        assetIds: []
    });
    g.game.pushScene(scene);
}
