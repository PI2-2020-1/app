export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(username, email, password1, password2, full_name, telegram) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, email, password1, password2, full_name, telegram},
  };
}

export function signUpVerificationRequest(cpf) {
  return {
    type: '@auth/SIGN_UP_VERIFICATION_REQUEST',
    payload: { cpf },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}