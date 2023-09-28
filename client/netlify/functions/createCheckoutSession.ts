import Stripe from 'stripe';

export async function handler(event: any, context: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
  });

  const { cart, shippingCost } = JSON.parse(event.body);
  console.log(cart, shippingCost);

  const lineItems = Object.values(cart as Record<string, CartProduct>).map(
    (entry) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: entry.product.name,
          images: [entry.product.imageUrl],
        },
        unit_amount: Math.round(entry.product.price * 100),
      },
      quantity: entry.quantity,
    })
  );
  console.log(lineItems);

  if (shippingCost) {
    lineItems.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'Versandkosten',
          images: [],
        },
        unit_amount: shippingCost * 100,
      },
      quantity: 1,
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:8888/einkauf',
    cancel_url: 'http://localhost:8888/einkauf',
    locale: 'de',
    shipping_address_collection: {
      allowed_countries: ['AT'],
    },
  });

  console.log(session);

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
}
