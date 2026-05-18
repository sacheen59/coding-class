from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        message = None

        # Extract the field error message
        for field, errors in response.data.items():

            if isinstance(errors, list):
                message = errors[0]
            else:
                message = str(errors)
            break
        response.data = {
            "message": message,
            "status_code": response.status_code
        }
    return response

