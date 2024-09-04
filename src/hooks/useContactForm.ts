import {SubmitHandler} from "react-hook-form";
import {z} from "zod";
import {toast} from "react-toastify";

export const useContactForm = () => {
    const validationSchema = z.object({
        name: z.string().min(2, {message: "Name must be at least 2 characters long"}).trim(),
        email: z.string().min(2, {message: "Email must be at least 2 characters long"})
            .email({message: "Invalid email address"})
            .refine((email) => email.endsWith("@gmail.com"), {
                message: "Email must end with @gmail.com",
            }),
        description: z.string().min(0, {message: "Description is required"}).trim(),
    });

    const defaultValues = {
        name: "",
        email: "",
        description: "",
    };

    const onSubmit: SubmitHandler<z.infer<typeof validationSchema>> = (data) => {
        // Eğer tüm alanlar boşsa
        if (!data.name.trim() && !data.email.trim() && !data.description.trim()) {
            toast.error('Tüm alanlar boş olamaz!');
            return;
        }

        // Sadece name, email ve description tek tek kontrol ediyoruz.
        if (!data.name.trim()) {
            toast.error('Name alanı boş olamaz!');
            return;
        }

        if (!data.email.trim()) {
            toast.error('Email alanı boş olamaz!');
            return;
        }

        if (!data.description.trim()) {
            toast.error('Description alanı boş olamaz!');
            return;
        }

        // Eğer tüm alanlar doluysa
        toast.success('Form başarıyla gönderildi!');

    };
    return {
        validationSchema,
        defaultValues,
        onSubmit
    }
};

