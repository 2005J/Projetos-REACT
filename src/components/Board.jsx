import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(0)}
          value={tiles[0]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(1)}
          value={tiles[1]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(2)}
          value={tiles[2]}
          className="right-board"
        />
      </div>
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(3)}
          value={tiles[3]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(4)}
          value={tiles[4]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(5)}
          value={tiles[5]}
          className="right-board"
        />
      </div>
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(6)}
          value={tiles[6]}
          className="bottom"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(7)}
          value={tiles[7]}
          className="right-board bottom"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(8)}
          value={tiles[8]}
          className="right-board bottom"
        />
      </div>
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
