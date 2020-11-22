const errorDto = (messageKey, message) => {
  return [
    {
      messageKey,
      message,
    },
  ];
};
module.exports = {
  errors: {
    LOGIN_FAIL: errorDto('Invalid', 'email or password is not valid'),
    NOT_FOUND: errorDto('NotFound', 'resource not found'),
    FORBIDDEN: errorDto(
      'Forbidden',
      'Access Denied You don’t have permission to access'
    ),
    BAD_REQUEST: errorDto(
      'Bad_Request',
      'Invalid parameters'
    ),
    INTERNAL_ERROR: errorDto(
      'Internal_Error',
      'Internal Error'
    ),
  },
  jwt_secret: 'wishlisttest',
};
