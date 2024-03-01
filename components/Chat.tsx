'use client'
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat (props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/chat"
    })

    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 scroll-y">
                <ScrollArea className="h-[600px] w-full space-y-4 pr-10">
                    {messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                                {message.role == "user" ? (
                                    <Avatar>
                                        <AvatarFallback>VA</AvatarFallback>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/47861954?v=4" />
                                    </Avatar>
                                ) : (
                                    <Avatar>
                                        <AvatarFallback>IA</AvatarFallback>
                                        <AvatarImage src="https://thinkml.ai/content/images/2022/02/ai-robots-on-amazon.jpg" />
                                    </Avatar>
                                )}

                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-700">{message.role == "user" ? "Victor Amaral" : "Chat GPT"}: </span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="w-full gap-2 flex" onSubmit={handleSubmit}>
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}