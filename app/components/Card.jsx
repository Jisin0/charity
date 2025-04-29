import React from 'react';

const Card = ({ background, children }) => {
    const hasBackground = Boolean(background);
  
    return (
      <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
        {hasBackground && (
          <div
            style={{
              background,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          />
        )}
        {hasBackground && (
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // adjust darkness here
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          />
        )}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
      </div>
    );
  };

export default Card;