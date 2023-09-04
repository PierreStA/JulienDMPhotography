import * as yup from "yup";

 const schema = yup.object({
    //* utiliser yup pour valider le formulaire
    description: yup
      .string()
      .min(4, "Description must be at least 4 characters")
      .max(255, "Description can't exceed 255 characters")
      .required("Description is required"),
    photo: yup.string().required("Photo is required"),
  });

  
export default schema;