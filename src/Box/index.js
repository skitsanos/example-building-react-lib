import React from 'react';

export const Box = ({children, className, style}) => <div className={className}
                                                          style={{
	                                                          display: 'flex',
	                                                          ...style
                                                          }}>{children}</div>;