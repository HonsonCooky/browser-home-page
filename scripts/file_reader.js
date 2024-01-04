import edge_json from "../assets/edge.json";

export function get_json(filename) {
  switch (filename) {
    case "edge":
      break;
    default:
      throw Error("Unknown JSON file");
  }
}
