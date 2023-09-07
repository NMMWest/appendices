import csv
import bpy
import random

with open ('/.../.../.../CSVs/2kTestEndVert.csv') as f:
    readout = list(csv.reader(f))
    print('past reader')
    
for count, poly in enumerate(readout):
    accWidth = 0.0 
    vertTotal = int((len(poly) * 6/9) / 2)
    bpy.ops.object.select_all(action='DESELECT')
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertTotal, radius=1, depth=1, end_fill_type='NGON', location=(0,0,(count)))
    rowPath = bpy.context.object
    
    currentVerts = 0

    for i in range(9, len(poly), 9):
        
        coords = [[abs(float(poly[i])), abs(float(poly[i + 1]))], [abs(float(poly[i + 2])), abs(float(poly[i + 3]))], [abs(float(poly[i + 4])), abs(float(poly[i + 5]))]]
        sorted(coords)

        polyWidth = float(poly [i + 8]) * 20

        rowPath.data.vertices[currentVerts].co[0] = accWidth + coords[0][0] 
        rowPath.data.vertices[currentVerts].co[1] = coords[0][1]  + (random.random()*(polyWidth/20))
        rowPath.data.vertices[currentVerts].co[2] = 0 
        
        rowPath.data.vertices[currentVerts+1].co[0] = accWidth + coords[0][0] 
        rowPath.data.vertices[currentVerts+1].co[1] = coords[0][1] + (random.random() *(polyWidth/20))
        rowPath.data.vertices[currentVerts+1].co[2] = 1 
        
        currentVerts += 2
        
        rowPath.data.vertices[currentVerts].co[0] = accWidth + coords[0][0] + coords[1][0] 
        rowPath.data.vertices[currentVerts].co[1] = coords[1][1] + (random.random() *(polyWidth/20))
        rowPath.data.vertices[currentVerts].co[2] = 0
        
        rowPath.data.vertices[currentVerts+1].co[0] = accWidth + coords[0][0] + coords[1][0]
        rowPath.data.vertices[currentVerts+1].co[1] = coords[1][1]  + (random.random() *(polyWidth/20))
        rowPath.data.vertices[currentVerts+1].co[2] = 1
        
        currentVerts += 2
        
        rowPath.data.vertices[currentVerts].co[0] = accWidth + coords[0][0] + coords[1][0] + coords[2][0] 
        rowPath.data.vertices[currentVerts].co[1] = coords[2][1]  + (random.random() *(polyWidth/20))
        rowPath.data.vertices[currentVerts].co[2] = 0
        
        rowPath.data.vertices[currentVerts+1].co[0] = accWidth + coords[0][0] + coords[1][0] + coords[2][0]
        rowPath.data.vertices[currentVerts+1].co[1] = coords[2][1] + (random.random() *(polyWidth/20))
        rowPath.data.vertices[currentVerts+1].co[2] = 1
        
        accWidth += polyWidth 
                
bpy.context.view_layer.update()
