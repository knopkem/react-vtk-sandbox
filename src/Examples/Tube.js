import React from 'react';
import { View, GeometryRepresentation, PolyData, Algorithm } from 'react-vtk-js';

export default function Tube() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <View background={[0.0, 0.0, 0.0]}>
                <GeometryRepresentation
                    property={{
                        color: [0.7, 0, 0],
                    }}>
                    <Algorithm
                        vtkClass="vtkTubeFilter"
                        state={{
                            radius: 0.05,
                            numberOfSides: 40,
                        }}>
                        <PolyData
                            points={[0, 0, 0, 0, -5, 0, 0.25, -6, 0, 1, -7, 0, 1.75, -7.5, 0, 6, -7.5, 0]}
                            lines={[2, 0, 1, 2, 1, 2, 2, 2, 3, 2, 3, 4, 2, 4, 5]}
                        />
                    </Algorithm>
                </GeometryRepresentation>
                <GeometryRepresentation
                    property={{
                        color: [0, 1, 0],
                    }}>
                    <PolyData points={[0, 0, 0, 0, -5, 0, 0.25, -6, 0, 1, -7, 0, 1.75, -7.5, 0, 6, -7.5, 0]} lines={[6, 0, 1, 2, 3, 4, 5]} />
                </GeometryRepresentation>
            </View>
        </div>
    );
}
