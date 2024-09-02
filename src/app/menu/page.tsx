import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react'

const menuItems = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon fillet grilled to perfection",
    price: 24.99,
    category: "Main Course",
    image: "/placeholder.svg?height=200&width=300",
    includes: ["Lemon butter sauce", "Steamed vegetables", "Rice pilaf"]
  },
  {
    id: 2,
    name: "Vegetarian Pasta",
    description: "Penne pasta with roasted vegetables in a light cream sauce",
    price: 18.99,
    category: "Main Course",
    image: "/placeholder.svg?height=200&width=300",
    includes: ["Garlic bread", "Parmesan cheese", "Side salad"]
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with our homemade Caesar dressing",
    price: 12.99,
    category: "Appetizer",
    image: "/placeholder.svg?height=200&width=300",
    includes: ["Croutons", "Parmesan cheese", "Lemon wedge"]
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center",
    price: 9.99,
    category: "Dessert",
    image: "/placeholder.svg?height=200&width=300",
    includes: ["Vanilla ice cream", "Fresh berries", "Mint leaf"]
  }
]

const categories = ["All", ...new Set(menuItems.map(item => item.category))]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="grid w-full h-full gap-3 grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => category === "All" || item.category === category)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-lg mb-2">Includes:</p>
                      <ul className="list-disc list-inside">
                        {item.includes.map((inclusion, index) => (
                          <li key={index}>{inclusion}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}