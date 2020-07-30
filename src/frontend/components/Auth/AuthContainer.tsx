import Container from '@material-ui/core/Container';

interface Props {
  children: NonNullable<React.ReactNode>;
}

const AuthContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container maxWidth="sm" disableGutters>
      {children}
    </Container>
  );
};

export default AuthContainer;