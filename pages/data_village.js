import Head from "next/head";
import Sw_card from "./dataVillage/sw_card";
import Pr_card from "./dataVillage/pr_card";
import Sk_card from "./dataVillage/sk_card";

export default function History() {
    return (
        <>
            <Head>
                <title>ข้อมูลศูนย์เรียนรู้ชุมชน</title>
            </Head>
            <Pr_card/>
            <Sw_card/>
            <Sk_card/>

        </>
    )
}