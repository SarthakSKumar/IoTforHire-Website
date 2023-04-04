import pandas as pd
from datetime import datetime
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from PyPDF2 import PdfFileMerger

# read data from csv file
df = pd.read_csv('menu.csv')

# define the bill format
font_size = 12
header_font_size = 16
line_height = font_size * 1.5
header_line_height = header_font_size * 1.5
margin = 20 * mm
width, height = letter
content_width = width - 2 * margin

# create the PDF document
filename = f'bill_{datetime.now().strftime("%Y%m%d_%H%M%S")}.pdf'
c = canvas.Canvas(filename, pagesize=letter)

# add the header
c.setFont('Helvetica-Bold', header_font_size)
c.drawString(margin, height - margin - header_line_height, 'Restaurant Bill')

# add the date
c.setFont('Helvetica', font_size)
c.drawString(margin, height - margin - 2 * header_line_height, datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

# add the menu items
y = height - margin - 3 * header_line_height
total = 0
for index, row in df.iterrows():
    c.setFont('Helvetica', font_size)
    item = row['Item']
    price = row['Price']
    quantity = row['Quantity']
    line_total = price * quantity
    total += line_total
    line = f'{item} x {quantity} = {line_total:.2f}'
    c.drawString(margin, y, line)
    y -= line_height

# add the total
c.setFont('Helvetica-Bold', header_font_size)
c.drawString(margin, y, f'Total = {total:.2f}')

# save the PDF document
c.save()

# merge the PDF files (optional)
merger = PdfFileMerger()
merger.append(filename)
merger.write('bill.pdf')
merger.close()
