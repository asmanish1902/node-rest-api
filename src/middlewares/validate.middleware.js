const validate = (schema) => {

    return async (req, res, next) => {

        try {

            const validatedData =
                await schema.parseAsync({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                });

            // req.body = validatedData.body;
            // req.params = validatedData.params;
            // req.query = validatedData.query;

            req.validated = validatedData;

            next();

        } catch (error) {

            return res.status(422).json({
                success: false,
                message: "Validation failed",
                errors: error.issues,
            });
        }
    };
};


/*
const validate = (schema) => {
    return async (req, res, next) => {
        try {

            const validatedData =
                await schema.parseAsync({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                });

            req.body = validatedData.body;

            next();

        } catch (error) {

            console.log(error);

            return res.status(422).json({
                success: false,
                message: "Validation failed",
                errors: error.issues,
            });
        }
    };
};
*/

export default validate;