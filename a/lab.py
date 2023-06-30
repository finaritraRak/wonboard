import boto3

def lambda_handler(event, context):
    # Récupérer le nom du fichier à partir de l'événement S3
    file_name = event['Records'][0]['s3']['object']['key']
    
    # Compter les mots dans le fichier
    word_count = 0
    s3_client = boto3.client('s3')
    
    response = s3_client.get_object(Bucket='votre-bucket-s3', Key=file_name)
    contents = response['Body'].read().decode('utf-8')
    
    words = contents.split()
    word_count = len(words)
    
    # Envoyer le résultat par e-mail en utilisant SNS
    sns_client = boto3.client('sns')
    subject = 'Résultat du décompte de mots'
    message = f"Le nombre de mots dans le fichier {file_name} est {word_count}."
    
    sns_client.publish(
        TopicArn='votre-arn-sns',
        Message=message,
        Subject=subject
    )