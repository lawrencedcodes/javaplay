
import * as React from "react";
import * as ReactDOM from "react-dom";
import {FC} from "react";
import {AdminWrapper} from "./Admin.styled";
interface AdminProps {}

const Admin: FC<AdminProps> = () => (
 <AdminWrapper>
    Admin Component
 </AdminWrapper>
);

export default Admin;
