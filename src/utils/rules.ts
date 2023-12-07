import * as yup from 'yup'
const schema = yup.object({
  username: yup.string().required('Username là bắt buộc').max(20, 'Độ dài tối đa là 20 ký tự'),
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160')
    .max(160, 'Độ dài từ 5-160'),
  password: yup.string().required('Password là bắt buộc').min(6, 'Độ dài từ 6-160').max(160, 'Độ dài từ 6-160'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6-160')
    .max(160, 'Độ dài từ 6-160')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  phone: yup
    .string()
    .required('Nhập số điện thoại là bắt buộc')
    .min(8, 'Độ dài tối thiểu 8 ký tự')
    .max(20, 'Độ dài tối đa là 20 ký tự')
})

export const registerSchema = schema.pick(['username', 'email', 'phone', 'password', 'confirm_password'])
export type RegisterSchema = yup.InferType<typeof registerSchema>
