import React from 'react';
import { View, GeometryRepresentation, PolyData, PointData, DataArray } from 'react-vtk-js';

export default function Geometry() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <View background={[0.0, 0.0, 0.0]}>
                <GeometryRepresentation>
                    <PolyData points={[0, 0, 0, 0, 1, 0, 1, 0, 0]} polys={[3, 0, 1, 2]}>
                        <PointData>
                            <DataArray registration="setScalars" name="temperature" values={[0, 0.5, 1]} />
                        </PointData>
                    </PolyData>
                </GeometryRepresentation>
            </View>
        </div>
    );
}
