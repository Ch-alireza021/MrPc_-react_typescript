import { FormikProps, useFormik } from "formik";
import {
  Animation,
  LoginFooter,
  LoginHeader,
  Password,
  UserName,
} from "../../components";
import {
  Container,
  Content,
  Wrapper,
} from "../../theme";
import { useNavigate } from "react-router-dom";
import {
  handleSubmite,
  initialValues,
  MyFormsValues,
  validationSchema,
} from "./utils";

const Login = () => {
  const navigate = useNavigate();
  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      handleSubmite(values, navigate);
    },
    validationSchema,
  });

  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Animation>
            <Wrapper>
              <Content>
                <LoginHeader />
                <UserName {...{ formik }} />
                <Password {...{ formik }} />
                <LoginFooter />
              </Content>
            </Wrapper>
          </Animation>
        </form>
      </Container>
    </>
  );
};

export default Login;
