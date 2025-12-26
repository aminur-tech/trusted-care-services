import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href="/" className="text-2xl font-bold text-primary">
          CARE.IO
        </Link>
        </div>
    );
};

export default Logo;