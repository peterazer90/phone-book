const addUser = {
  firstname: '',
  lastname: '',
  phone: '',
};
/// ////////////////////////////////////////////////////////////////////////
function SET_FORM_STATES(INIT_STATE) {
  return {
    data: { ...INIT_STATE },
    validation: { ...INIT_STATE },
    disabled: true,
    formFeedback: { status: '', message: '' },
  };
}
/// ////////////////////////////////////////////////////////////////////////
export default {
  ADD_USER: SET_FORM_STATES(addUser),
};
