import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'h0r3rka0',
    dataset: 'production',
    apiVersion: '2022-04-26',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);