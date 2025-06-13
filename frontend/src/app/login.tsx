import JourneyContainer from "@/app/components/Login/JourneyContainer";
import BreadcrumbContainer from "@/app/components/Login/BreadcrumbContainer";
import LoginContainer from "@/app/components/Login/LoginContainer";
import FormContainer from "@/app/components/Login/FormContainer";
import ContainerLogin from "./components/Login/Container";
export default function Login() {
  return (
    <ContainerLogin>
      <JourneyContainer>
        <BreadcrumbContainer />
      </JourneyContainer>
      <LoginContainer>
        <FormContainer />
      </LoginContainer>
    </ContainerLogin>
  );
}
