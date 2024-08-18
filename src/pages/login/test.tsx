// import * as React from "react";

// import { Button } from "@mui/base/Button";
// import { Input as BaseInput, InputProps, inputClasses } from "@mui/base/Input";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import styled from "@emotion/styled";
// import Box from "@mui/material/Box";

// const Input = React.forwardRef(function CustomInput(
//   props: InputProps,
//   ref: React.ForwardedRef<HTMLDivElement>
// ) {
//   const { slots, ...other } = props;
//   return (
//     <BaseInput
//       slots={{
//         root: InputRoot,
//         input: InputElement,
//         ...slots,
//       }}
//       {...other}
//       ref={ref}
//     />
//   );
// });

// interface State {
//   amount: string;
//   password: string;
//   weight: string;
//   weightRange: string;
//   showPassword: boolean;
// }

// export default function Test() {
//   const [values, setValues] = React.useState<State>({
//     amount: "",
//     password: "",
//     weight: "",
//     weightRange: "",
//     showPassword: false,
//   });

//   const handleChange =
//     (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//       setValues({ ...values, [prop]: event.target.value });
//     };

//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", sm: "row" },
//         gap: 2,
//       }}
//     >
//       <Input
//         id="outlined-start-adornment"
//         startAdornment={<InputAdornment>kg</InputAdornment>}
//       />
//       <Input
//         id="outlined-adornment-password"
//         type={values.showPassword ? "text" : "password"}
//         value={values.password}
//         onChange={handleChange("password")}
//         endAdornment={
//           <InputAdornment>
//             <IconButton
//               size="small"
//               aria-label="toggle password visibility"
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}
//             >
//               {values.showPassword ? (
//                 <VisibilityOff fontSize="small" />
//               ) : (
//                 <Visibility fontSize="small" />
//               )}
//             </IconButton>
//           </InputAdornment>
//         }
//       />
//     </Box>
//   );
// }

// const blue = {
//   100: "#DAECFF",
//   200: "#80BFFF",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0059B2",
// };

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const InputRoot = styled("div")(
//   ({ theme }) => `
//   border-radius: 8px;
//   color: ${grey[500]};
//   background: ${"#fff"};
//   border: 1px solid ${grey[200]};
//   box-shadow: 0px 2px 4px ${
//     theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
//   };
//   display: flex;
//   align-items: center;
//   justify-content: center;


//   &.${inputClasses.focused} {
//     border-color: ${"#03c03c"};
//     box-shadow: 0 0 0 3px ${"#03c03c"};
//   }

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   // firefox
//   &:focus-visible {
//     outline: 0;
//   }
// `
// );

// const InputElement = styled("input")(
//   ({ theme }) => `
//   font-size: 0.875rem;
//   font-family: inherit;
//   font-weight: 400;
//   line-height: 1.5;
//   flex-grow: 1;
//   color: ${grey[900]};
//   background: inherit;
//   border: none;
//   border-radius: inherit;
//   padding: 8px 12px;
//   outline: 0;
// `
// );

// const IconButton = styled(Button)(
//   () => `
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   background: inherit;
//   cursor: pointer;
//   color: grey[700];
//   `
// );

// const InputAdornment = styled("div")`
//   margin: 8px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
// `;
