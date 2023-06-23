import Head from "next/head";
import Sw_card from "./dataVillage/sw_card";
import Pr_card from "./dataVillage/pr_card";
import Sk_card from "./dataVillage/sk_card";
import { motion } from "framer-motion";

export default function History() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>ข้อมูลศูนย์เรียนรู้ชุมชน</title>
        </Head>
        <Pr_card />
        <Sw_card />
        <Sk_card />
      </motion.div>
    </>
  );
}
