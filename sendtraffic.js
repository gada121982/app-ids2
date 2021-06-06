

const csv = require('csv-parser'); const fs = require('fs'); const axios = require('axios')

const path = '/resource/TCPDUMP_and_CICFlowMeter/csv/' + process.argv[2]


fs.createReadStream(path) .pipe(csv()) .on('data', (row) => { let features = []

features.push(row['Dst Port'])
features.push(row['Protocol'])
features.push(row['Flow Duration'])
features.push(row['Total Fwd Packet'])
features.push(row['Total Bwd packets'])
features.push(row['Total Length of Fwd Packet'])
features.push(row['Total Length of Bwd Packet'])
features.push(row['Flow Bytes/s'])
features.push(row['Flow Packets/s'])
features.push(row['Fwd IAT Total'])
features.push(row['Bwd IAT Total'])
features.push(row['Fwd PSH Flags'])
features.push(row['Bwd PSH Flags'])
features.push(row['Fwd URG Flags'])
features.push(row['Bwd URG Flags'])
features.push(row['Fwd Header Length'])
features.push(row['Bwd Header Length'])
features.push(row['Fwd Packets/s'])
features.push(row['Bwd Packets/s'])
features.push(row['Packet Length Variance'])
features.push(row['FIN Flag Count'])
features.push(row['SYN Flag Count'])
features.push(row['RST Flag Count'])
features.push(row['PSH Flag Count'])
features.push(row['ACK Flag Count'])
features.push(row['URG Flag Count'])
features.push(row['CWR Flag Count'])
features.push(row['ECE Flag Count'])
features.push(row['Down/Up Ratio'])
features.push(row['Average Packet Size'])
features.push(row['Fwd Segment Size Avg'])
features.push(row['Bwd Segment Size Avg'])
features.push(row['Bwd Bulk Rate Avg'])
features.push(row['Subflow Fwd Packets'])
features.push(row['Subflow Fwd Bytes'])
features.push(row['Subflow Bwd Packets'])
features.push(row['Subflow Bwd Bytes'])
features.push(row['FWD Init Win Bytes']) 
features.push(row['Bwd Init Win Bytes'])
features.push(row['Fwd Act Data Pkts'])

console.log(features.length)
axios.post('http://localhost:8000/feature',{ features: features})

}) .on('end', () => { console.log('CSV file successfully processed'); });
