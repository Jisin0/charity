import React from 'react'


type EventsCardProps = {
  title: string;
  date?: string;
  isUpcoming?: boolean;
  children?: React.ReactNode;
};

export default function EventsCard({ title, date, isUpcoming, children }: EventsCardProps) {
  return (
    <div className="card">
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '500px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h4 className='pt-0'>
          {title} {date && (<>({date})</>)}
        </h4>
        {isUpcoming? 
          (<p className="p-2 text-green-600 border-green-600 rounded-full border-1" style={{fontSize: '0.85rem'}}>Upcoming</p>) : 
          (<p className="p-2 text-red-600 border-red-600 rounded-full border-1" style={{fontSize: '0.85rem'}}>Finished</p>)}
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}
