import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "@components/Buttonicon";

type Props = {
  name: string; 
  onRemove: () => void; 
}

export function PlayerCard({ name, onRemove }: Props) {
  return(
    <Container>
      <Icon
        name = "person"

      />

      <Name>
        {name}
      </Name>

      {/*reaproveitando o componente ButtonIcon porem com outras propriedades*/}
      <ButtonIcon 
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />

    </Container>
  );
}
