import Box from "./Box.jsx";

function Main() {
  return (
    <div className="flex justify-evenly items-center gap-4 m-4">
      <Box heading="Box 1" />
      <Box heading="Box 2" />
      <Box heading="Box 3" />
      <Box heading="Box 4" />
    </div>
  );
}

export default Main;
