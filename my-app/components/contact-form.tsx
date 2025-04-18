"use client"
import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      // toast({
      //   title: "Message envoyé !",
      //   description: "Merci pour votre message. Je vous répondrai dès que possible.",
      // })
      // Réinitialiser le formulaire
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Envoyez-moi un message</CardTitle>
        <CardDescription>Je vous répondrai dès que possible.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" placeholder="Votre nom" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Votre email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Sujet</Label>
            <Input id="subject" placeholder="Sujet de votre message" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Votre message" className="min-h-[120px]" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Envoi en cours...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Envoyer
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}