import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required('Username là bắt buộc').max(20, 'Độ dài tối đa là 20 ký tự'),
  email: yup
    .string()
    .required('Email là bắt buộc')
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      'Email không đúng định dạng'
    )
    .max(160, 'Độ dài tối đa là 160 ký tự'),
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
export type Schema = yup.InferType<typeof schema>

export const registerSchema = schema.pick(['username', 'email', 'phone', 'password', 'confirm_password'])
export type RegisterSchema = yup.InferType<typeof registerSchema>

export const loginSchema = schema.pick(['email', 'password'])
export type LoginSchema = yup.InferType<typeof loginSchema>

// user schema
export const userSchema = yup.object({
  name: yup.string().max(160, 'Độ dài tối đa là 160 ký tự'),
  phone: yup.string().max(20, 'Độ dài tối đa là 20 ký tự'),
  address: yup.string().max(160, 'Độ dài tối đa là 160 ký tự'),
  avatar: yup.string().max(1000, 'Độ dài tối đa là 1000 ký tự'),
  date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),
  password: schema.fields['password'],
  new_password: schema.fields['password'],
  confirm_password: schema.fields['confirm_password']
})

export type UserSchema = yup.InferType<typeof userSchema>

export const profileSchema = userSchema.pick(['name', 'address', 'phone', 'date_of_birth', 'avatar'])
export type ProfileSchema = yup.InferType<typeof profileSchema>
