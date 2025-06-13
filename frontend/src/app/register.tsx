import ContainerRegister from "./components/Register/Container";
import JourneyContainer from "@/app/components/Register/JourneyContainer";
import BreadcrumbContainer from "@/app/components/Register/BreadcrumbContainer";
import RegisterContainer from "@/app/components/Register/RegisterContainer";
import FormContainer from "@/app/components/Register/FormContainer";
export default function RegisterPage() {
  return (
    <ContainerRegister>
      <JourneyContainer>
        <BreadcrumbContainer />
      </JourneyContainer>
      <RegisterContainer>
        <FormContainer />
      </RegisterContainer>
    </ContainerRegister>
  );
}
