import { Studio } from '@/types/studio'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Users, Shield, Clock, ArrowRight } from 'lucide-react'

interface StudioCardProps {
    studio: Studio;
}

const StudioCard = async ({ studio }: StudioCardProps) => {
    return (
        <Card className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 flex flex-col h-full py-0">
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                    src={studio.image || '/placeholder-studio.jpg'}
                    alt={studio.studio_title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-zinc-800 backdrop-blur-md font-medium text-xs shadow-sm dark:bg-zinc-900/90 dark:text-zinc-200">
                        {studio.category}
                    </Badge>
                </div>

                {/* Location Overlay on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center text-white/90 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-zinc-300" />
                    <span className="truncate">{studio.location}</span>
                </div>
            </div>

            {/* Card Content */}
            <CardHeader className="p-5 pb-3">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 line-clamp-1 group-hover:text-primary transition-colors">
                    {studio.studio_title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">
                    {studio.details}
                </p>
            </CardHeader>

            <CardContent className="p-5 pt-0 pb-4 flex-1 flex flex-col justify-between">
                {/* Specs / Meta */}
                <div className="grid grid-cols-2 gap-2 my-3 py-3 border-y border-zinc-100 dark:border-zinc-900 text-xs text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Up to {studio.max_capacity} guests</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span>Deposit: ${studio.security_deposit}</span>
                    </div>
                </div>

                {/* Amenities Tags */}
                {studio.amenities && studio.amenities.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {studio.amenities.slice(0, 3).map((amenity, index) => (
                            <span 
                                key={index}
                                className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[11px] font-medium"
                            >
                                {amenity}
                            </span>
                        ))}
                        {studio.amenities.length > 3 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 text-[11px] font-medium">
                                +{studio.amenities.length - 3} more
                            </span>
                        )}
                    </div>
                )}
            </CardContent>

            {/* Card Footer with Price and Action */}
            <CardFooter className="p-5 pt-1 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 mt-auto">
                <div>
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        ${studio.hourly_rate}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">/ hour</span>
                </div>

                <Button  className="gap-1.5 font-medium">
                    <Link href={`/studios/${studio._id}`} className='flex items-center justify-center'>
                        Details
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ms-2" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default StudioCard