import Stripe from 'stripe';

export async function createCheckout(event: any) {
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
        },
        unit_amount: entry.product.price,
      },
      quantity: entry.quantity,
    })
  );
  console.log(lineItems);

  // Add shipping cost as a separate line item
  if (shippingCost) {
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Shipping',
        },
        unit_amount: shippingCost,
      },
      quantity: 1,
    });
  }

  // Create a new Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: '/einkauf',
    cancel_url: '/einkauf',
  });

  console.log(session);

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
}
