import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTargetId } from "utils/common";

function Start() {
  const [target, setTarget] = useState("");
  const canTargeted = !!getTargetId(target);

  const nav = useNavigate();

  const handleClick = () => {
    nav(`/scope?t=${getTargetId(target)}`);
  };

  return (
    <InputGroup mt="4" size="lg">
      <Input
        pr="6.2rem"
        placeholder="https://tjournal.ru/"
        size="lg"
        onChange={(ev) => setTarget(ev.target.value)}
      />
      <InputRightElement width="6rem">
        <Button
          h="2.5rem"
          size="sm"
          disabled={!canTargeted}
          onClick={handleClick}
        >
          Scooope
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Start;
