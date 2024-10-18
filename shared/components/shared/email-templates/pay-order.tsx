import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Objednávání #{orderId}</h1>

    <p>
    Zaplaťte za objednávku ve výši <b>{totalAmount} Kč</b>. Přejděte na{' '}
      <a href={paymentUrl}>na tomto odkazu</a> zaplatit za objednávku.
    </p>
  </div>
);
