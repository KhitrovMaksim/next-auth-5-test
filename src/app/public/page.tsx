import { auth } from "@/auth"
import { Session } from "next-auth";

export default async function Page() {
    const session: Session | null = await auth()
    return <p>Hello {session?.user?.name}</p>
}
