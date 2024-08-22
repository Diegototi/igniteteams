import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton ,BackIcon } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;

}

export function Header({ showBackButton = false}: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    //usando .goBack volta sempre para screen anterior
    //navigation.goBack();

    //No caso dessa aplicação vamos usar da forma abaixo que leva sempre para Home
    navigation.navigate('groups');

  }

  return (
    <Container>
     {
      showBackButton && 
      <BackButton onPress={handleGoBack}>  
        <BackIcon />
       </BackButton>
     }  
      <Logo source={logoImg} />
    </Container>


  );

}