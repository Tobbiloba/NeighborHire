interface RegisterUserInterface {
  email: string;
  userName: string;
  phoneNo: string;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  address: string | null;
  recoveryOption: {
    question: string | null;
    answer: string | null;
  };
  authentication: {
    salt: string;
    password: string;
  };
}

interface JwtExpPayload {
  id: string; // Type for decoded token data (assuming 'id' exists)
}

interface User {
  userName: string;
  _id: string;
}

export { RegisterUserInterface, JwtExpPayload, User };
